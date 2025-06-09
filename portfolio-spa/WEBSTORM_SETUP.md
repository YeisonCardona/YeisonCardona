# WebStorm Configuration for Portfolio SPA

This document describes the WebStorm configuration that has been set up to launch the Angular development server for this project.

## Configuration Details

The following WebStorm configuration files have been created in the `.idea` directory:

1. **workspace.xml** - Main project configuration file
2. **modules.xml** - Defines the project module structure
3. **portfolio-spa.iml** - Module definition file
4. **jsLibraryMappings.xml** - JavaScript library mappings
5. **runConfigurations/Angular_Development_Server.xml** - Run configuration for the Angular development server

## How to Launch the Server in WebStorm

1. Open the project in WebStorm
2. In the top-right corner of the WebStorm window, you should see a dropdown with run configurations
3. Select "Angular Development Server" from the dropdown
4. Click the green "Run" button (play icon) next to the dropdown

This will execute the `npm run start` command, which runs `ng serve` as defined in the package.json file. The Angular development server will start, and your application will be available at `http://localhost:4200/` by default.

## Alternative Method

You can also launch the server from the WebStorm terminal:

1. Open the Terminal tool window in WebStorm (Alt+F12 on Windows/Linux, ⌥F12 on macOS)
2. Run the command: `npm start`

## Customizing the Configuration

If you need to customize the server configuration (e.g., change the port, enable HTTPS, etc.), you can:

1. Edit the run configuration in WebStorm: Run → Edit Configurations → Angular Development Server
2. Add additional parameters to the "start" script in package.json, for example:
   ```json
   "start": "ng serve --port 4300 --open"
   ```

## Troubleshooting

If the run configuration doesn't appear in WebStorm:
1. Close and reopen the project
2. Ensure that the .idea directory and its contents are properly created
3. Try manually importing the run configuration: Run → Edit Configurations → + → npm
