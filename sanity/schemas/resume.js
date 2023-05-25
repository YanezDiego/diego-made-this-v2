import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'employer',
      title: 'Employer',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'employer',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'text',
    }),
    defineField({
      name: 'isCurrent',
      title: 'Current',
      type: 'boolean',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'text',
    }),
    defineField({
      name: 'companyDescription',
      title: 'Company Description',
      type: 'text',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),
    defineField({
      name: 'achievements',
      title: 'Achievements',
      type: 'blockContent',
    }),
  ],
})
