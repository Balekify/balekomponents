import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

import { Wave, Carousel } from '../src/components'

const carouselItems = [1, 2, 3, 4, 5];

storiesOf("Wave", module)
  .add("Wave", () => <Wave />)
  .add("Carousel", () => <Carousel>{carouselItems}</Carousel>);
