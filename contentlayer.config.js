import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The short description of the post',
      required: false,
    },
    id: {
      type: 'number',
      description: 'The id for sorting the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/projects/${post._raw.flattenedPath}`,
    },
    queryString: {
      type: 'string',
      resolve: (post) => `/projects/?project=${post._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content/projects',
  documentTypes: [Post],
})