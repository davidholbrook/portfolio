import React, { Component } from "react"

export default class Icons extends Component {
  render() {
    switch (this.props.name) {
      default:
        return null
      case "logo--light":
        return (
          <svg
            viewBox="0 0 147 140"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            width="120px"
          >
            <path fill="none" d="M0 0h147v139.5H0z" />
            <path
              d="M46.652 94.8c4.6 0 8.4-.4 12-1.8 9.501-3.3 15.401-12.402 15.401-25.303 0-13-5.9-22.1-15.3-25.5-3.9-1.4-7.5-1.6-12.1-1.6h-.802v54.202h.801zm-19.602.4h8.801V40.095h-8.8v-7.7h20.101c5.9 0 10.3.3 15.001 1.7 13.5 4.2 22.301 16.4 22.301 33.601 0 17.102-8.5 29.002-22.3 33.403-4.602 1.5-9.302 1.9-14.902 1.9H27.05v-7.8z"
              fill="#333"
              fill-rule="nonzero"
            />
            <path
              d="M50.752 95.2h23.801V40.096h-23.8v-7.7h-2.299l21 7.7h5.1v23.502h26.601V40.096h-8.9v-7.7h27.702v7.7h-8.8V95.2h8.8v7.8H92.255v-7.8h8.9V71.798H74.553V95.2h-3.099l-16 6.8-4.702 1v-7.8z"
              fill="#333"
              fill-rule="nonzero"
            />
            <path
              d="M73.5 5C35.729 5 5 34.047 5 69.75s30.729 64.75 68.5 64.75S142 105.453 142 69.75 111.271 5 73.5 5m0 134.5C32.972 139.5 0 108.21 0 69.75S32.972 0 73.5 0 147 31.29 147 69.75s-32.972 69.75-73.5 69.75"
              fill="#333"
              fill-rule="nonzero"
            />
          </svg>
        )
      case "logo--dark":
        return (
          <svg
            viewBox="0 0 147 140"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            width="120px"
          >
            <g>
              <path fill="none" d="M0 0h147v139.5H0z" />
              <clipPath id="a">
                <path d="M0 0h147v139.5H0z" />
              </clipPath>
              <g clip-path="url(#a)">
                <path
                  d="M46.652 94.8c4.6 0 8.4-.4 12-1.8 9.501-3.3 15.401-12.402 15.401-25.303 0-13-5.9-22.1-15.3-25.5-3.9-1.4-7.5-1.6-12.1-1.6h-.802v54.202h.801zm-19.602.4h8.801V40.095h-8.8v-7.7h20.101c5.9 0 10.3.3 15.001 1.7 13.5 4.2 22.301 16.4 22.301 33.601 0 17.102-8.5 29.002-22.3 33.403-4.602 1.5-9.302 1.9-14.902 1.9H27.05v-7.8z"
                  fill="#ccc"
                  fill-rule="nonzero"
                />
                <path
                  d="M50.752 95.2h23.801V40.096h-23.8v-7.7h-2.299l21 7.7h5.1v23.502h26.601V40.096h-8.9v-7.7h27.702v7.7h-8.8V95.2h8.8v7.8H92.255v-7.8h8.9V71.798H74.553V95.2h-3.099l-16 6.8-4.702 1v-7.8z"
                  fill="#ccc"
                  fill-rule="nonzero"
                />
                <path
                  d="M73.5 5C35.729 5 5 34.047 5 69.75s30.729 64.75 68.5 64.75S142 105.453 142 69.75 111.271 5 73.5 5m0 134.5C32.972 139.5 0 108.21 0 69.75S32.972 0 73.5 0 147 31.29 147 69.75s-32.972 69.75-73.5 69.75"
                  fill="#ccc"
                  fill-rule="nonzero"
                />
              </g>
            </g>
          </svg>
        )
    }
  }
}
