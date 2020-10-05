import React from "react"
import Carousell from "../src/components/Carousell"
import Card from "../src/components/Card"
import { withKnobs } from "@storybook/addon-knobs"

export default {
  component: Carousell,
  title: "Card Carousell",
  decorators: [withKnobs],
}

export const defaultCarousell = () => (
  <Carousell>
    <Card title="title" />
    <Card title="title" />
    <Card title="title" />
  </Carousell>
)
