import { useState } from 'react';

import { useGetCharactersQuery } from '@/generated/graphql';

export const useInfiniteCharactersQuery = () => {
  const [search, setSearch] = useState('');
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // TODO: add thantstack query to graphql code generator
  const { fetchMore, data, ...query } = useGetCharactersQuery({
    variables: { filter: { name: search } }
  });

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    fetchMore({
      variables: {
        page: data?.characters?.info?.next || 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;

        return {
          characters: {
            ...fetchMoreResult.characters,
            results: [
              ...(prev.characters?.results || []),
              ...(fetchMoreResult.characters?.results || [])
            ]
          }
        };
      }
    }).finally(() => {
      setIsLoadingMore(false);
    });
  };

  return {
    ...query,
    data,

    handleLoadMore,
    isLoadingMore,

    search,
    setSearch
  };
};
