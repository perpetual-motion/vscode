#!/usr/bin/env node
import { spawnSync } from 'child_process';

import { $args, brightGreen, brightWhite, getSwitch, gray, green, pwd } from './lib/common';

import { environment, install, installExtension, options } from "./lib/vscode";
import { fail } from 'assert';
import { verbose } from './lib/system/verbose';
import { id, isolated, tmp, extensionsDir, userDir, settings } from './lib/vscode';
import { dirname, resolve } from 'path';
import { existsSync, readdirSync } from 'fs';
export { install, uninstall } from './lib/vscode';

const v = require(`${__dirname}/../package.json`).version;

export async function add() {
  const pkg = $args[0];
  verbose(`Installing ${brightGreen(pkg)}`)
  installExtension(pkg)
}

function dump(id: string) {
  const isolated = resolve(tmp, id);
  const extensionsDir = resolve(isolated, 'extensions');
  const userDir = resolve(isolated, 'user-data');
  const settings = resolve(userDir, "User", 'settings.json');

  if (existsSync(`${isolated}/cache`)) {
    console.log(`\n  For isolated instance '${id}':`);
    const files = readdirSync(`${isolated}/cache`);
    const install = files.filter(each => each.startsWith('vscode-'))[files.length - 1];
    const vv = install.replace(/.+-/g, '');
    const folder = resolve(`${isolated}/cache/${install}`)
    console.log(`    VSCode Version: ${brightWhite(vv)}`);

    console.log(`    Install folder: ${brightGreen(folder)}`);
    console.log(`    Extensions folder: ${brightGreen(extensionsDir)}`);
    console.log(`    User Data folder: ${brightGreen(userDir)}`);
    console.log(`    Settings file: ${brightGreen(settings)}`);
  } else {
    console.log(`  VSCode not installed for id : '${id}'`);
  }
}

export async function info() {
  console.log(`Isolated VSCode`)
  console.log(`----------------`)
  console.log(`Utility Version: ${brightGreen(v)}`);
  console.log(`Base directory: ${brightGreen(tmp)}`);
  if (!existsSync(tmp)) {
    console.log(`\nNo VSCode instances found in ${brightGreen(tmp)}\n`);
    return;
  }

  if (getSwitch('all')) {
    for (const each of readdirSync(tmp)) {
      dump(each)
    }
  } else {
    dump(id);
  }
}

export async function main() {
  const { cli, args } = await install() || fail('Failed to install');
  verbose(green('Launch VSCode'));
  const ARGS = [...args, ...options.launchArgs.filter(each => !each.startsWith('--extensions-dir=') && !each.startsWith('--user-data-dir=')), ...$args];
  verbose(gray(`${cli}\n  ${[...ARGS].join('\n  ')}`));
  spawnSync(cli, ARGS, { encoding: 'utf-8', stdio: 'ignore', env: environment(), cwd: pwd });
}
