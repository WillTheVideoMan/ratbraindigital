import initStoryshots from "@storybook/addon-storyshots"
import * as Gatsby from "gatsby"

/**
 * Spy on and mock the implementation for useStaticQuery.
 */
const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      lang: "en",
      title: "Title",
      description: "Description",
      author: "Author",
      siteUrl: "siteUrl",
    },
  },
}))

initStoryshots()
