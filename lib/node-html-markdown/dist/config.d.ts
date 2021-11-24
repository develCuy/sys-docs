import { TranslatorConfigObject } from './translator';
import { NodeHtmlMarkdownOptions } from './options';
import { Options as NodeHtmlParserOptions } from 'node-html-parser';
export declare const defaultBlockElements: string[];
export declare const defaultIgnoreElements: string[];
export declare const contentlessElements: string[];
export declare const defaultOptions: Readonly<NodeHtmlMarkdownOptions>;
export declare const defaultTranslators: TranslatorConfigObject;
/**
 * Note: Do not change - values are tuned for performance
 */
export declare const nodeHtmlParserConfig: NodeHtmlParserOptions;
