import { renderFile } from 'https://deno.land/x/mustache/mod.ts';

import os from 'https://deno.land/x/dos@v0.11.0/mod.ts';
import * as path from 'https://deno.land/std/path/mod.ts';
import {Command} from 'https://deno.land/x/cliffy/command/mod.ts';
import {StringResponse} from '../../interfaces/string-response.ts';


export class ConfigFileService {

	public static async loadFile(args: {file: string, model:any}) {
		const homeDir = os.homeDir();
		const model = {
			...args.model, // user data
			dir: path.join(homeDir ? homeDir : './', 'Lethean', 'conf')
		}
		const file = await renderFile(path.join(homeDir ? homeDir : './', 'Lethean', 'conf', 'templates', args.file), model)
		return file;
	}

	public static config() {
		const home = os.homeDir();

		return new Command()
			.description('Configured File Service')
			.command('get', 'Gets a file with fresh configuration')
			.option('-f,--file <string>', 'Specify configuration file')
			.action(async (args) => {

				//if (Deno.env.get('REST')) {
//				throw new StringResponse(ConfigFileService.loadFile(args));
				//}
			})
	}
}

