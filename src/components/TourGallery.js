import 'antd/dist/antd.css'
import './styles.css'
import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'
import lodash from 'lodash'
import { Icon } from 'antd'
import data from './data'
import { Grid, Slug, Fade } from 'mauerwerk'

const TourGallery = () => {
  return (
    <Grid
      // Arbitrary data, should contain keys, possibly heights, etc.
      data={this.state.data}
      // Key accessor, instructs grid on how to fetch individual keys from the data set
      keys={d => d.key}
      // Can be a fixed value or an individual data accessor (for variable heights)
      // If you leave it undefined it will assume 100% container height
      heights={d => d.height}
      // Optional: number of columns (make it responsive yourself using react-measure/react-media)
      columns={3}
      // Optional: space between elements
      margin={0}
      // Optional: removes the possibility to scroll away from a maximized element
      lockScroll={false}
      // Optional: delay before minimizing an opened element
      closeDelay={500}
      // Optional: animates the grid in if true (default)
      transitionMount={true}>
      {(data, open, toggle) => (
        <div>
          {data.title}
          {open && <div>Opened/maximized content here</div>}
          <button onClick={toggle}>{open ? 'Close' : 'Open'}</button>
        </div>
      )}
    </Grid>
  )
}

export default TourGallery;
