import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
export interface RequestInterceptor {
    callback: (value: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>;
    onRejected?: (error: any) => any;
}
export declare class Requestor {
    readonly SANDBOX_BASE: string;
    readonly PRODUCTION_BASE: string;
    protected apiKey: string;
    protected apiBase: string;
    protected token: string;
    protected environment: string;
    protected apiVersion: string;
    protected accountId: string | number;
    protected static httpClient: AxiosInstance;
    protected static requestInterceptors: RequestInterceptor[];
    constructor();
    /**
     * Set the http client isntance
     * @param {AxiosInstance} client
     */
    static setHttpClient(client: AxiosInstance): void;
    /**
     * Return the httpClient
     * @returns {AxiosInstance}
     */
    private httpClient;
    /**
     * Set the http client isntance
     * @param {AxiosInstance} client
     */
    static addRequestInterceptor(interceptor: RequestInterceptor): void;
    /**
     * Apply request interceptor
     * @param {AxiosInstance} httpClient
     */
    private applyRequestInterceptors;
    /**
     * Sent request
     * @param {string} method
     * @param {string} path
     * @param {Object} params
     * @param {Object} headers
     *
     * @returns {Promise<AxiosResponse<any>>}
     */
    request(method: string, path: string, params?: {}, headers?: {}): Promise<AxiosResponse<any>>;
    /**
     * Return base url
     * @returns {string}
     */
    protected baseUrl(): string;
    /**
     * Handle request exception
     * @param {any} e
     * @returns {Promise<ApiConnectionError>}
     */
    protected handleRequestException(e: any): Promise<never>;
    /**
     * Return the url
     * @param {string} path
     */
    protected url(path?: string): string;
    /**
     * Return default headers
     * @returns {Object}
     */
    protected defaultHeaders(): any;
}
