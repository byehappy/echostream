import {useCallback} from "react";
import {clientID,accessToken} from '../components/tokens';

export const useHttp: any = () => {

    const request = useCallback(async (url: string,
                                       method = 'GET',
                                       body = null,
                                       headers = {'client-id': clientID, 'Authorization': 'Bearer ' + accessToken }
    ) => {

        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            return data;
        } catch(e) {
            throw e;
        }
    }, []);

    return {request}

}
