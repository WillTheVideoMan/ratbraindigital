import React from "react"
import Layout from "../src/components/layout"
import { withKnobs, number } from "@storybook/addon-knobs"

export default {
  component: Layout,
  title: "Layout",
  decorators: [withKnobs],
}

export const defaultLayout = () => <Layout>{number("number", 1)}</Layout>

export const emptyLayout = () => <Layout />
