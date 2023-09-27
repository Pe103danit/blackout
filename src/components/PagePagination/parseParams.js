 export const parseParams = (paramsData) => {
  const result = {}
  const params = new URLSearchParams(paramsData);

  if (params.get('categories')) {
    result.categories = params.get('categories')
  }
   if (params.get('minPrice')) {
     result.minPrice = params.get('minPrice')
   }
   if (params.get('maxPrice')) {
     result.maxPrice = params.get('maxPrice')
   }
   if (params.get('sort')) {
     result.sort = params.get('sort')
   }
   if (params.get('page')) {
     result.page = params.get('page')
   }
   return result
}