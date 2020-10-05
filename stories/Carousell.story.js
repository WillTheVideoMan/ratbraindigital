import React from "react"
import Carousell from "../src/components/Carousell"
import { withKnobs } from "@storybook/addon-knobs"

export default {
  component: Carousell,
  title: "Carousell",
  decorators: [withKnobs],
}

export const defaultCarousell = () => (
  <Carousell>
    <div>hi</div>
    <div>hello</div>
    <div>greetings</div>
  </Carousell>
)
