import { createBucketClient } from '@cosmicjs/sdk'
import { navLinks } from './page';

export const prerender = false;

const cosmicCMSClient = createBucketClient({
  bucketSlug: import.meta.env.PUBLIC_COSMIC_BUCKET_SLUG,
  readKey: import.meta.env.PUBLIC_COSMIC_READ_KEY,
})

export const getAllProducts = async (category = 'all-products') => {

  // TODO: Add category filter to query
  const query = {
    type: 'products',
  }

  console.log(query)
  
  const products = await cosmicCMSClient.objects.find(query)

  // TODO: Implement this filter in the query itself
  if (category !== 'all-products') {
    return products.objects.filter((product: any) => product.metadata.category.key === navLinks.find((link) => link.link === `/${category}`)?.singularName);
  }

  return products.objects
}

export const getProduct = async (slug: string) => {
  const product = await cosmicCMSClient.objects.findOne({
    slug,
    type: 'products',
  })

  return product.object
}

export const searchProducts = async (searchTerm: string) => {
  // const query = 
  //   searchTerm.split(' ').map((word) => `metadata.title.match("${word}")`).join(' OR ')

  const query = {
    type: 'products',
    $or: [
      { title: { $regex: searchTerm, $options: 'i' } },
      { 'metadata.description': { $regex: searchTerm } },
      { slug: { $regex         : searchTerm } },
    ]
  }

  const products = await cosmicCMSClient.objects.find(query);
  
  console.log(products)

  return products.objects
}