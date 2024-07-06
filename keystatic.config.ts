import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    // schema for a online store showcasing products
    products: collection({
      label: 'Products',
      slugField: 'title',
      path: 'content/products/*',
      schema: {
        title: fields.slug({
          name: { label: 'Title', validation: { isRequired: true } },
          slug: { label: 'Slug' }
        }),
        price: fields.number({ label: 'Price', validation: { isRequired: true } }),
        description: fields.text({ label: 'Description'}),
        image: fields.image({ 
          label: 'Image',
          directory: 'public/images/products', 
          publicPath: 'images/products'
        }),
        category: fields.relationship({
          label: 'Category',
          collection: 'categories',
          validation: {isRequired: true }
        })
      }
    }),
    // schema for categories
    categories: collection({
      label: 'Categories',
      slugField: 'name',
      path: 'content/categories/*',
      schema: {
        name: fields.slug({ 
          name: { label: 'Name', validation: { isRequired: true } },
          slug: { label: 'Slug' }
        }),
        description: fields.text({ label: 'Description' }),
        products: fields.array(
          fields.relationship({ 
            label: 'Products', 
            collection: 'products' 
          }), {
            label: 'Products',
            validation: { length: { min: 1 } }
          }
        )
      }
    })
  }
});