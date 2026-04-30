import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  groups: [
    {name: 'hero', title: 'Hero'},
    {name: 'headline', title: 'Headline'},
    {name: 'about', title: 'About'},
    {name: 'services', title: 'Services'},
    {name: 'projects', title: 'Projects'},
    {name: 'testimonials', title: 'Testimonials'},
    {name: 'news', title: 'News'},
    {name: 'footer', title: 'Footer'},
  ],
  fields: [
    // Hero
    defineField({
      name: 'navLinks',
      title: 'Nav links',
      type: 'array',
      group: 'hero',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            {name: 'label', type: 'string', title: 'Label'},
            {name: 'href', type: 'string', title: 'Href'},
          ],
          preview: {select: {title: 'label', subtitle: 'href'}},
        }),
      ],
    }),
    defineField({name: 'heroTag', title: 'Hero tag', type: 'string', group: 'hero', description: 'e.g. "[ Hello i\'m ]"'}),
    defineField({name: 'heroName', title: 'Hero name', type: 'string', group: 'hero'}),
    defineField({name: 'heroIntro', title: 'Hero intro paragraph', type: 'text', rows: 4, group: 'hero'}),
    defineField({name: 'heroImage', title: 'Hero background image', type: 'image', group: 'hero', options: {hotspot: true}}),
    defineField({name: 'ctaLabel', title: 'CTA button label', type: 'string', group: 'hero', initialValue: "Let's talk"}),

    // Headline section
    defineField({name: 'headlineTopTag', title: 'Headline top tag', type: 'string', group: 'headline', description: 'e.g. "[ 8+ years in industry ]"'}),
    defineField({
      name: 'headlineLines',
      title: 'Headline lines',
      type: 'array',
      group: 'headline',
      of: [defineArrayMember({type: 'string'})],
      description: 'One line of the big headline per array entry.',
    }),
    defineField({name: 'headlineBottomTag', title: 'Headline bottom tag', type: 'string', group: 'headline'}),

    // About
    defineField({name: 'aboutTag', title: 'About tag', type: 'string', group: 'about'}),
    defineField({name: 'aboutBody', title: 'About body', type: 'text', rows: 8, group: 'about'}),
    defineField({name: 'aboutImage', title: 'About image', type: 'image', group: 'about', options: {hotspot: true}}),
    defineField({name: 'bigImage', title: 'Big full-width image', type: 'image', group: 'about', options: {hotspot: true}}),

    // Services
    defineField({name: 'servicesTag', title: 'Services tag', type: 'string', group: 'services'}),
    defineField({name: 'servicesHeading', title: 'Services heading', type: 'string', group: 'services', initialValue: 'Deliverables'}),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      group: 'services',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'description', type: 'text', rows: 3, title: 'Description'},
            {name: 'image', type: 'image', title: 'Thumbnail', options: {hotspot: true}},
          ],
          preview: {select: {title: 'title', media: 'image'}},
        }),
      ],
    }),

    // Projects
    defineField({name: 'projectsTag', title: 'Projects tag', type: 'string', group: 'projects'}),
    defineField({name: 'projectsHeading', title: 'Projects heading', type: 'string', group: 'projects', initialValue: 'Selected Work'}),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      group: 'projects',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'image', type: 'image', title: 'Image', options: {hotspot: true}},
            {
              name: 'categories',
              type: 'array',
              title: 'Categories',
              of: [defineArrayMember({type: 'string'})],
              options: {layout: 'tags'},
            },
            {name: 'href', type: 'string', title: 'Link'},
          ],
          preview: {select: {title: 'title', media: 'image'}},
        }),
      ],
    }),
    defineField({name: 'projectsCtaText', title: 'Projects CTA text', type: 'text', rows: 3, group: 'projects'}),

    // Testimonials
    defineField({name: 'testimonialsHeading', title: 'Testimonials heading', type: 'string', group: 'testimonials', initialValue: 'Testimonials'}),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      group: 'testimonials',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Name'},
            {name: 'quote', type: 'text', rows: 4, title: 'Quote'},
            {name: 'brand', type: 'string', title: 'Brand label'},
          ],
          preview: {select: {title: 'name', subtitle: 'brand'}},
        }),
      ],
    }),

    // News
    defineField({name: 'newsHeading', title: 'News heading', type: 'string', group: 'news'}),
    defineField({
      name: 'news',
      title: 'News articles',
      type: 'array',
      group: 'news',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            {name: 'image', type: 'image', title: 'Image', options: {hotspot: true}},
            {name: 'text', type: 'text', rows: 3, title: 'Text'},
            {name: 'href', type: 'string', title: 'Link'},
          ],
          preview: {select: {title: 'text', media: 'image'}},
        }),
      ],
    }),

    // Footer
    defineField({name: 'footerCtaHeading', title: 'Footer CTA heading', type: 'string', group: 'footer', initialValue: 'Have a project in mind?'}),
    defineField({name: 'contactEmail', title: 'Contact email', type: 'string', group: 'footer'}),
    defineField({
      name: 'socialLinks',
      title: 'Social links',
      type: 'array',
      group: 'footer',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            {name: 'label', type: 'string', title: 'Label'},
            {name: 'href', type: 'url', title: 'Href'},
          ],
          preview: {select: {title: 'label', subtitle: 'href'}},
        }),
      ],
    }),
    defineField({name: 'footerBrand', title: 'Footer brand wordmark', type: 'string', group: 'footer', initialValue: 'H.Studio'}),
    defineField({name: 'footerCodedTag', title: 'Footer coded tag', type: 'string', group: 'footer', initialValue: '[ Coded By Claude ]'}),
  ],
  preview: {
    prepare: () => ({title: 'Homepage'}),
  },
})
