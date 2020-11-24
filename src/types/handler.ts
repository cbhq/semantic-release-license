import { Context } from 'semantic-release';

export type Handler = (license: string, context: Context) => Promise<string> | string;
