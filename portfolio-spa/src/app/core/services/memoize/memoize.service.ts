import { Injectable } from '@angular/core';

type AsyncFn<T> = () => Promise<T>;

@Injectable({ providedIn: 'root' })
export class MemoizeService {
  private memoryCache = new Map<string, any>();

  constructor() {}

  async memoize<T>(
    key: string,
    fn: AsyncFn<T>,
    options: {
      storage?: 'memory' | 'session' | 'local',
      ttlMs?: number, // opcional: tiempo de expiración
      debug?: boolean
    } = {}
  ): Promise<T> {
    const storage = options.storage ?? 'memory';
    const debug = options.debug ?? false;

    const now = Date.now();

    // Check memory
    if (storage === 'memory' && this.memoryCache.has(key)) {
      if (debug) console.log(`[Memo] memory hit: ${key}`);
      return this.memoryCache.get(key);
    }

    // Check session/localStorage
    if (storage === 'session' || storage === 'local') {
      const container = storage === 'session' ? sessionStorage : localStorage;
      const raw = container.getItem(key);
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          if (!options.ttlMs || (now - parsed.timestamp < options.ttlMs)) {
            if (debug) console.log(`[Memo] ${storage}Storage hit: ${key}`);
            return parsed.value;
          } else {
            container.removeItem(key); // expired
          }
        } catch (e) {
          container.removeItem(key); // corrupt
        }
      }
    }

    if (debug) console.log(`[Memo] cache miss: ${key}. Computing...`);
    const result = await fn();

    // Save
    if (storage === 'memory') {
      this.memoryCache.set(key, result);
    } else {
      const container = storage === 'session' ? sessionStorage : localStorage;
      container.setItem(key, JSON.stringify({ value: result, timestamp: now }));
    }

    return result;
  }
}
