import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
    uri:"https://us1.prisma.sh/luis-felipe-quintero-cervera-905415/production/prod"
});

const authLink = setContext ((_,{headers}) => {
    const token = localStorage.getItem(`token`);
    return{
        headers: {
            ...headers,
            authorization: token ? `JWT $(token)` : ''
        }
    }
});

const client = new ApolloClient({
    link:authLink.concat(httpLink),
    cache:new InMemoryCache()
})

export default client