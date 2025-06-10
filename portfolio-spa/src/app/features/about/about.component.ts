import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatGridListModule,
    // MatButton,
    // MatIcon
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  colspan = 5;
  rowspan = 6;
  cols = 10;
  breakpoint='Default'

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,    // (max-width: 599.98px)
        Breakpoints.Small,     // (min-width: 600px) and (max-width: 959.98px)
        Breakpoints.Medium,    // (min-width: 960px) and (max-width: 1279.98px)
        Breakpoints.Large,     // (min-width: 1280px) and (max-width: 1919.98px)
        Breakpoints.XLarge     // (min-width: 1920px)
      ])
      .pipe(
        map(result => {
          if (result.breakpoints[Breakpoints.XSmall]) {
            return { cols: 8, colspan: 8, rowspan: 10, breakpoint:'XSmall' };
          }
          if (result.breakpoints[Breakpoints.Small]) {
            return { cols: 9, colspan: 9, rowspan: 8, breakpoint:'Small' };
          }
          if (result.breakpoints[Breakpoints.Medium]) {
            return { cols: 10, colspan: 10, rowspan: 4, breakpoint:'Medium' };
          }
          // Por defecto (Large y XLarge)
          return { cols: 10, colspan: 5, rowspan: 6, breakpoint:'Default' };
        })
      )
      .subscribe(({ colspan, rowspan, cols, breakpoint }) => {
        this.colspan = colspan;
        this.rowspan = rowspan;
        this.cols = cols;
        this.breakpoint = breakpoint
      });
  }




  private shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  shuffleTools(): void {
    this.tools = this.shuffleArray([...this.tools]);
  }

  tools = this.shuffleArray([
    {
      icon: "devicon-anaconda-original-wordmark",
      colored: true,
      colspan: "2"
    },
    {
      icon: "devicon-angular-plain-wordmark",
      colored: false,
      colspan: "2"
    },
    {
      icon: "devicon-apache-plain-wordmark",
      colored: true,
      colspan: "2"
    },
    {
      icon: "devicon-apachekafka-original-wordmark",
      colored: false,
      colspan: "1"
    },
    {
      icon: "devicon-archlinux-plain-wordmark",
      colored: true,
      colspan: "2"
    },
    {
      icon: "devicon-arduino-plain-wordmark",
      colored: true,
      colspan: "1"
    },
    {
      icon: "devicon-bash-plain",
      colored: false,
      colspan: "1",
      zoom: "08"
    },
    {
      icon: "devicon-bitbucket-original-wordmark",
      colored: true,
      colspan: "1"
    },
    {
      icon: "devicon-bootstrap-plain-wordmark",
      colored: true,
      colspan: "1",
      zoom: "08"
    },
    {
      icon: "devicon-coffeescript-original-wordmark",
      colored: true,
      colspan: "1"
    },
    {
      icon: "devicon-css3-plain-wordmark",
      colored: true,
      colspan: "1"
    },
    {
      icon: "devicon-debian-plain-wordmark",
      colored: true,
      colspan: "1"
    },
    {
      icon: "devicon-django-plain-wordmark",
      colored: true,
      colspan: "2"
    },
    {
      icon: "devicon-djangorest-line",
      colored: true,
      colspan: "1"
    },
    {
      icon: "devicon-docker-plain-wordmark",
      colored: true,
      colspan: "1"
    },
    {
      icon: "devicon-fastapi-plain-wordmark",
      colored: true,
      colspan: "2"
    },
    {
      icon: "devicon-fedora-plain",
      colored: true,
      colspan: "1",
      zoom: "08"
    },
    {
      icon: "devicon-flask-original-wordmark",
      colored: false,
      colspan: "1"
    },
    {
      icon: "devicon-github-original",
      colored: false,
      colspan: "1",
      zoom: "08"
    },
    {
      icon: "devicon-git-plain-wordmark",
      colored: true,
      colspan: "1"
    },
    {
      icon: "devicon-html5-plain-wordmark",
      colored: true,
      colspan: "1"
    },
    {
      icon: "devicon-inkscape-plain-wordmark",
      colored: false,
      colspan: "1"
    },
    {
      icon: "devicon-javascript-plain",
      colored: true,
      colspan: "1",
      zoom: "08"
    },
    {
      icon: "devicon-json-plain",
      colored: false,
      colspan: "1",
      zoom: "08"
    },
    {
      icon: "devicon-jupyter-plain-wordmark",
      colored: true,
      colspan: "1"
    },
    {
      icon: "devicon-kaggle-original-wordmark",
      colored: true,
      colspan: "1"
    },
    {
      icon: "devicon-keras-plain-wordmark",
      colored: true,
      colspan: "2"
    },
    {
      icon: "devicon-latex-original",
      colored: false,
      colspan: "1"
    },
    {
      icon: "devicon-linux-plain",
      colored: false,
      colspan: "1",
      zoom: "08"
    },
    {
      icon: "devicon-markdown-original",
      colored: false,
      colspan: "1"
    },
    {
      icon: "devicon-matplotlib-plain-wordmark",
      colored: true,
      colspan: "2"
    },
    {
      icon: "devicon-numpy-plain-wordmark",
      colored: true,
      colspan: "2"
    },
    {
      icon: "devicon-openapi-plain-wordmark",
      colored: true,
      colspan: "2"
    },
    {
      icon: "devicon-opencv-plain-wordmark",
      colored: true,
      colspan: "1"
    },
    {
      icon: "devicon-opensuse-original-wordmark",
      colored: true,
      colspan: "1"
    },
    {
      icon: "devicon-pandas-plain-wordmark",
      colored: true,
      colspan: "1"
    },
    {
      icon: "devicon-plotly-plain-wordmark",
      colored: true,
      colspan: "2"
    },
    {
      icon: "devicon-postgresql-plain-wordmark",
      colored: true,
      colspan: "1"
    },
    {
      icon: "devicon-pycharm-plain-wordmark",
      colored: true,
      colspan: "2"
    },
    {
      icon: "devicon-pypi-plain-wordmark",
      colored: true,
      colspan: "1"
    },
    {
      icon: "devicon-pytest-plain-wordmark",
      colored: true,
      colspan: "1"
    },
    {
      icon: "devicon-python-plain-wordmark",
      colored: true,
      colspan: "1"
    },
    {
      icon: "devicon-pytorch-plain-wordmark",
      colored: true,
      colspan: "2"
    },
    {
      icon: "devicon-qt-original",
      colored: true,
      colspan: "1",
      zoom: "08"
    },
    {
      icon: "devicon-raspberrypi-plain-wordmark",
      colored: true,
      colspan: "2"
    },
    {
      icon: "devicon-readthedocs-original-wordmark",
      colored: false,
      colspan: "2"
    },
    {
      icon: "devicon-sass-original",
      colored: true,
      colspan: "1"
    },
    {
      icon: "devicon-scikitlearn-plain",
      colored: true,
      colspan: "1"
    },
    {
      icon: "devicon-selenium-original",
      colored: true,
      colspan: "1",
      zoom: "08"
    },
    {
      icon: "devicon-sqlite-plain-wordmark",
      colored: true,
      colspan: "1"
    },
    {
      icon: "devicon-ssh-original-wordmark",
      colored: false,
      colspan: "1"
    },
    {
      icon: "devicon-swagger-plain-wordmark",
      colored: true,
      colspan: "2"
    },
    {
      icon: "devicon-tensorflow-original-wordmark",
      colored: true,
      colspan: "2"
    },
    {
      icon: "devicon-typescript-plain",
      colored: true,
      colspan: "1",
      zoom: "08"
    },
    {
      icon: "devicon-ubuntu-plain-wordmark",
      colored: true,
      colspan: "2"
    },
    {
      icon: "devicon-vim-plain",
      colored: true,
      colspan: "1",
      zoom: "08"
    },
    {
      icon: "devicon-webstorm-plain-wordmark",
      colored: true,
      colspan: "2"
    },
    {
      icon: "devicon-yaml-plain",
      colored: true,
      colspan: "1",
      zoom: "08"
    },
    {
      icon: "devicon-xml-plain",
      colored: true,
      colspan: "1"
    },
    {
      icon: "devicon-angularmaterial-plain",
      colored: false,
      colspan: "1",
      zoom: "08"
    },
  ]);

}
