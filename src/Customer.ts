import { Resource } from './Resource';
import { FedaPayObject } from './FedaPayObject';

export class Customer extends Resource {
    /**
     * @param id string|number
     * @param headers object|null
     * @returns Promise<Customer>
     */
    static retrieve(id, headers = {}): Promise<Customer> {
        return <Promise<Customer>> this._retrieve(id, headers);
    }

    /**
     * @param params object|null
     * @param headers object|null
     *
     * @returns Promise<Customer[]>
     */
    static all(params = {}, headers = {}): Promise<FedaPayObject> {
        return <Promise<FedaPayObject>> this._all(params, headers);
    }

    /**
     * @param params object|null
     * @param headers object|null
     *
     * @returns Promise<Customer>
     */
    static create(params = {}, headers = {}): Promise<Customer> {
        return <Promise<Customer>> this._create(params, headers);
    }

    /**
     * @param id string The ID of the customer to update.
     * @param params object|null
     * @param headers object|null
     *
     * @returns Promise<Customer>
     */
    static update(id, params = {}, headers = {}): Promise<Customer> {
        return <Promise<Customer>> this._update(id, params, headers);
    }

    /**
     * @param array|string|null $headers
     *
     * @returns Promise<Customer> The saved customer.
     */
    save(headers = {}): Promise<Customer> {
        return <Promise<Customer>> this._save(headers);
    }

    /**
     * @param array $headers
     *
     * @returns Customer The deleted customer.
     */
    delete(headers = {}): Promise<Customer> {
        return <Promise<Customer>> this._delete(headers);
    }
}
