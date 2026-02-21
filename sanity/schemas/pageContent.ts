import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pageContent',
  title: 'Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'pageId',
      title: 'Page Identifier',
      type: 'string',
      description: 'A unique slug to identify the page (e.g., "home", "about", "harvest").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      description: 'The large headline text in the hero section.',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Subheadline',
      type: 'string',
      description: 'The smaller text beneath the hero headline.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      description: 'The background image for the hero section.',
    }),
    defineField({
      name: 'heroCtaText',
      title: 'Hero CTA Button Text',
      type: 'string',
      description: 'Text for the call-to-action button in the hero section.',
    }),
    defineField({
      name: 'heroCtaLink',
      title: 'Hero CTA Button Link',
      type: 'string',
      description: 'URL or path for the CTA button.',
    }),
    defineField({
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'contentSection',
          title: 'Content Section',
          fields: [
            defineField({
              name: 'sectionId',
              title: 'Section ID',
              type: 'string',
              description: 'A unique identifier for this section (e.g., "origin", "harvest", "workshop").',
            }),
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
            }),
            defineField({
              name: 'body',
              title: 'Body Text',
              type: 'text',
              rows: 6,
            }),
            defineField({
              name: 'image',
              title: 'Section Image',
              type: 'image',
              options: { hotspot: true },
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'pageId' },
    prepare({ title }) {
      return { title: `Page: ${title}` };
    },
  },
});
