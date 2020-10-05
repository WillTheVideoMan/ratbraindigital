import React from "react"
import Card from "../src/components/Card"
import { text, withKnobs } from "@storybook/addon-knobs"

export default {
  component: Card,
  title: "Card",
  decorators: [withKnobs],
}

export const defaultCard = () => <Card title={text("title", "title")} />
