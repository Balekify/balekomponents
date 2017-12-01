import React, { Component } from 'react'

export default class Wave extends Component {
  componentDidMount() {
    const c = document.getElementById('wave')
    const ctx = c.getContext('2d')

    for (let x = 0; x <= 360; x += 1) {
      const y = 180.0 - Math.sin(x * Math.PI / 180) * 120
      ctx.lineTo(x, y)
    }

    ctx.scale(1, 1)
    ctx.stroke()
  }

  render() {
    return <canvas id="wave" />
  }
}
