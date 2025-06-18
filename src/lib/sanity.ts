import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(160)
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'PC Repair', value: 'pc-repair' },
          { title: 'Tech Reviews', value: 'tech-reviews' },
          { title: 'Data Recovery', value: 'data-recovery' },
          { title: 'Networking', value: 'networking' },
          { title: 'Gaming', value: 'gaming' },
          { title: 'Security', value: 'security' },
          { title: 'DeLand Tech Tips', value: 'deland-tech-tips' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      placeholder: '5 min read',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Hunter @ Xtremery',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' }
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' }
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url'
                  }
                ]
              },
              {
                title: 'Affiliate Link',
                name: 'affiliateLink',
                type: 'object',
                fields: [
                  {
                    title: 'Product Name',
                    name: 'productName',
                    type: 'string'
                  },
                  {
                    title: 'Affiliate URL',
                    name: 'affiliateUrl',
                    type: 'url'
                  },
                  {
                    title: 'Price',
                    name: 'price',
                    type: 'string'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'image',
          options: { hotspot: true }
        },
        {
          name: 'affiliateProduct',
          title: 'Affiliate Product',
          type: 'object',
          fields: [
            {
              name: 'productName',
              title: 'Product Name',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2
            },
            {
              name: 'affiliateUrl',
              title: 'Affiliate URL',
              type: 'url'
            },
            {
              name: 'price',
              title: 'Price',
              type: 'string'
            },
            {
              name: 'image',
              title: 'Product Image',
              type: 'image'
            }
          ]
        },
        {
          name: 'tipBox',
          title: 'Tip Box',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Tip Title',
              type: 'string'
            },
            {
              name: 'content',
              title: 'Tip Content',
              type: 'text',
              rows: 3
            }
          ]
        }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Display this post prominently on the blog homepage'
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Override the default title for SEO (60 chars max)',
      validation: Rule => Rule.max(60)
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
      description: 'Meta description for search engines (160 chars max)',
      validation: Rule => Rule.max(160)
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    })
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'featuredImage',
      category: 'category'
    },
    prepare(selection) {
      const { author, category } = selection;
      return {
        ...selection,
        subtitle: `${category} by ${author}`
      };
    }
  }
});