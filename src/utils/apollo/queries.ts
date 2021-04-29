import { useQuery, UseQueryReturn } from "@vue/apollo-composable";
import * as Queries from "@/utils/graphql/queries";
import * as Types from "@/utils/graphql/types";
import { ApolloQueryResult } from '@apollo/client';
import { DocumentNode } from 'graphql/language/ast';

type onResultFn<TResult> = ((param: ApolloQueryResult<TResult>) => void) | undefined;
type onErrorFn = ((param: Error) => void) | undefined;

function handleQueryResponses<TResult>(
        query: UseQueryReturn<TResult, undefined>,
        onResult: onResultFn<TResult> = undefined,
        onError: onErrorFn = undefined
    ): UseQueryReturn<TResult, undefined> {
    if (onResult) {
        query.onResult(onResult);
    }
    if (onError) {
        query.onError(onError);
    }
    return query;
}

function doQuery<TResult>(
    graphQlQuery: DocumentNode,
    onResult: onResultFn<TResult> = undefined,
    onError: onErrorFn = undefined
    ): UseQueryReturn<TResult, undefined> {
    const query = useQuery<TResult>(graphQlQuery);
    return handleQueryResponses(query, onResult, onError);
}

async function doQueryAsync<TResult>(graphQlQuery: DocumentNode): Promise<ApolloQueryResult<TResult>> {
    return new Promise<ApolloQueryResult<TResult>>((resolve, reject) => {
        doQuery<TResult>(graphQlQuery, (res) => {
            resolve(res);
        }, (err) => {
            reject(err);
        })
    })
}

export async function getAllTestDataAsync(): Promise<ApolloQueryResult<Types.AllTestdata>> {
    return doQueryAsync<Types.AllTestdata>(Queries.allTestData);
}
export function getAllTestData(
        onResult: onResultFn<Types.AllTestdata> = undefined,
        onError: onErrorFn = undefined
    ): UseQueryReturn<Types.AllTestdata, undefined> {
    return doQuery(Queries.allTestData, onResult, onError);
}
