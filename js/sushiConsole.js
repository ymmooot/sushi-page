const animationTags = [...Array(3).keys()].map(i => `<animateTransform attributeType="xml" attributeName="transform" type="translate" values="500 0;-100 0" calcMode="linear" dur="3s" repeatCount="indefinite" begin="${i}s"/>`)
const sushiGroupTags = animationTags.map(animationTag => `<g><g><g><g><path d="M99.32,22.83c-1.26-3.8-5.13-8.3-9.45-9.23c-1.76-0.38-4.42-0.33-6.73-0.18l-1.07,0.06 c-4.98,0.25-9.89,1.21-14.03,2.12c-10.4,2.29-22.18,4.88-33.28,8.63c-0.88,0.3-1.79,0.6-2.72,0.9 C26,27.1,19.15,29.33,14.24,33.7c-2.86,2.55-5.13,6.12-6.56,10.3c-1.96,5.76-2.25,12.15-0.81,17.98 C9.53,72.81,16.51,74.36,23.88,76c0.79,0.17,1.62,0.35,2.46,0.55c3.93,0.93,7.93,1.4,11.87,1.4c17.19,0,31.9-8.67,45.51-17.55 c5.47-3.58,9.46-6.94,12.51-10.56C102.21,42.78,102.09,31.19,99.32,22.83z" style="fill:#E4E3DE;"/><path d="M98.68,21.26c-1.8,0.52-3.59,1.05-5.39,1.57C74.89,28.2,62.6,34.62,46.47,44.96 c-4.4,2.82-9.22,8.05-10.82,13.04c-1.39,4.34-1.99,8.1-3.99,12.2c-1.45,2.97-4.37,4.66-7.55,5.85c0.73,0.16,1.47,0.32,2.25,0.51 c3.93,0.93,7.93,1.4,11.87,1.4c17.19,0,31.9-8.67,45.51-17.55c5.47-3.58,9.46-6.94,12.51-10.56c5.97-7.06,5.85-18.66,3.08-27.02 C99.16,22.31,98.93,21.79,98.68,21.26z" style="fill:#CDCBBF;"/></g><path d="M2.5,33.26c-1.58,3.62-2.29,8.02-0.69,11.76c1.81,4.22,5.97,4.63,9.93,5.52 c8.94,2.02,20.76,6.13,29.91,4.05c5.52-1.25,10.9-4.92,15.8-7.63c11.71-6.5,23.27-13.34,35.41-19.05 c2.87-1.35,10.65-3.23,10.62-7.28c-0.01-1.44,0-2.88,0-4.32c0-2.96-0.51-6.79-3.31-8.45c-1.62-0.96-3.64-1.53-5.43-2.1 c-2.85-0.91-5.74-1.91-8.62-2.69c-8.39-2.3-17.41-3.41-26.03-1.88c-16.02,2.86-30.23,9.81-43.38,19.21 C12.92,23.1,8.98,25.69,5.68,29C4.08,30.6,3.1,31.89,2.5,33.26z" style="fill:#FAC11D;"/><path d="M99.47,7.08c2.83,3.71-13.83,10.32-18.03,12.55c-6.93,3.69-13.88,7.78-21.1,10.86 c-5.62,2.4-9.29,4.43-14.67,7.33c-0.87,0.47-3.9,3.02-4.68,5.53c-1.08,3.49-1.52,8.83-1.28,12.48" style="fill:none;"/><path d="M100.18,7.85c-0.59-0.35-1.23-0.63-1.89-0.9c1.3,4.25-12.3,8.97-16.6,10.87 c-9.32,4.13-27.85,11.26-34.89,18.52c-1.85,1.91-5.79,7.39-6.56,9.9c-1,3.21-3.02,7.55-8.14,8.68c3.34,0.35,6.6,0.33,9.57-0.34 c5.52-1.25,10.9-4.92,15.8-7.63c11.71-6.5,23.27-13.34,35.41-19.05c2.87-1.35,10.65-3.23,10.62-7.28c-0.01-1.44,0-2.88,0-4.32 C103.49,13.34,102.97,9.51,100.18,7.85z" style="fill:#E4A724;"/><path d="M29.67,17.03c6.95,0.84,13.21,1.89,21.58,4.22c8.83,2.46,12,5.43,13.1,14.45 c1.12,9.2,2.9,23.15-1.14,31.95c-1.05,2.27-2.55,4.55-4.15,6.34c1.21,0.32,10.68-3.02,14.85-6.14 c6.92-5.17,8.18-11.64,8.26-19.76c0.08-7.57-0.62-20.35-3.06-26.99c-2.06-5.62-7.62-7.67-12.94-9.32 c-3.82-1.18-12.25-3.47-19.1-4.14c-4.73-0.47-8.79,0.37-9.74,0.69c-2.42,0.81-7.06,3.41-10.7,5.58 c-2.64,1.58-4.85,3.01-4.85,3.01S25.43,16.52,29.67,17.03z" style="fill:#2F2F2F;"/></g><g><g><path d="M125.26,72.4c-1.26-3.8-5.13-8.3-9.45-9.23c-1.76-0.38-4.42-0.33-6.73-0.18l-1.07,0.06 c-4.98,0.25-9.89,1.21-14.03,2.12c-10.4,2.29-22.18,4.88-33.28,8.63c-0.88,0.3-1.79,0.6-2.72,0.9 c-6.04,1.98-12.89,4.21-17.8,8.58c-2.86,2.55-5.13,6.12-6.56,10.3c-1.96,5.76-2.25,12.15-0.81,17.98 c2.66,10.83,9.63,12.38,17.01,14.02c0.79,0.17,1.62,0.35,2.46,0.55c3.93,0.93,7.93,1.4,11.87,1.4c17.19,0,31.9-8.67,45.51-17.55 c5.47-3.58,9.46-6.94,12.51-10.56C128.15,92.35,128.03,80.76,125.26,72.4z" style="fill:#E4E3DE;"/><path d="M124.61,70.83c-1.8,0.52-3.59,1.05-5.39,1.57c-18.4,5.37-37.33,11-52.28,23 c-3.59,2.88-7.07,6.38-8.03,10.88c-0.96,4.45,0.68,9.4-1.32,13.5c-1.45,2.97-4.37,4.66-7.55,5.85c0.73,0.16,1.47,0.32,2.25,0.51 c3.93,0.93,7.93,1.4,11.87,1.4c17.19,0,31.9-8.67,45.51-17.55c5.47-3.58,9.46-6.94,12.51-10.56c5.97-7.06,5.85-18.66,3.08-27.02 C125.09,71.89,124.87,71.36,124.61,70.83z" style="fill:#CDCBBF;"/></g><path d="M28.35,86.34c-1.61,4.77,0.26,9.8,5.75,9.48c6.32-0.36,13.12-0.17,19.34,1.13 c4.17,0.87,8.23,2.32,12.39,3.16c2.28,0.46,5.13,0.94,7.51,0.42c1.97-0.43,3.71-1.92,5.49-2.82c7.38-3.74,14.27-8.16,21.74-11.72 c4.64-2.21,9.21-4.55,13.8-6.85c3.76-1.88,9.84-3.4,11.67-7.74c4.18-9.83-9.32-17.4-16.97-19.26 c-8.51-2.07-18.84-2.78-27.38-0.68c-6.28,1.54-12.52,3.39-18.51,5.89c-5.85,2.45-10.61,5.89-15.86,9.24 c-5.46,3.49-11.2,7.96-15.34,12.99C30.51,81.38,29.22,83.77,28.35,86.34z" style="fill:#EC6C30;"/><path d="M120.31,57.43c0.91,1.56,0.37,4.46-0.72,5.86c-1.88,2.42-8.38,5.23-10.66,6.42 c-5.88,3.05-20.24,8.36-24.48,11.13c-4.78,3.11-11.65,7.95-15.86,11.79c-3.41,3.11-6.84,4.84-11.04,5.34 c2.76,0.75,5.5,1.59,8.28,2.15c2.28,0.46,5.13,0.94,7.51,0.42c1.97-0.43,3.71-1.92,5.49-2.82c7.38-3.74,14.27-8.16,21.74-11.72 c4.64-2.21,9.21-4.55,13.8-6.85c3.76-1.88,9.84-3.4,11.67-7.74C128.43,65.8,125.06,60.93,120.31,57.43z" style="fill:#D65B29;"/><path d="M97.57,53.15c4.42,1.8,7.83,5.91,8.78,10.59c0.05,0.23,0.09,0.47,0.04,0.71 c-0.07,0.32-0.33,0.58-0.61,0.75c-1.03,0.59-2.4,0.07-3.2-0.81c-0.8-0.88-1.2-2.04-1.73-3.11c-0.77-1.56-1.84-2.97-3.14-4.12 c-0.59-0.52-1.25-1.04-1.5-1.78C95.94,54.61,96.29,52.96,97.57,53.15z" style="fill:#F4865C;"/><path d="M79.6,55.1c3.1,3.13,5.72,6.73,7.74,10.64c0.88,1.7,1.59,3.96,1.25,5.85 c-0.33,1.88-1.35,2.86-3.18,2.3c-1.26-0.35-1.93-4.35-2.93-7.44c-0.58-1.79-2.25-4.91-3.38-6.42c-1.13-1.51-2.67-3.07-2.65-4.96 C76.37,54.36,77.64,53.68,79.6,55.1z" style="fill:#F4865C;"/><path d="M64.49,59.88c1.05,0.53,1.71,1.48,2.41,2.42c0.41,0.56,0.75,1.17,1.08,1.78 c2.56,4.66,5.2,9.74,4.47,15c-0.1,0.72-0.28,1.46-0.72,2.05c-0.44,0.58-1.2,0.97-1.91,0.79c-0.95-0.33-1.47-3.76-2.2-5.63 c-0.29-0.74-0.58-1.49-0.83-2.24c-1.16-3.44-1.59-7.15-3.31-10.33c-0.44-0.82-0.99-1.67-0.91-2.59 C62.63,60.18,63.75,59.33,64.49,59.88z" style="fill:#F4865C;"/><path d="M48.01,70.45c0.1-1.7,2.29-1.17,2.74,0.09c0.7,1.96,1,3.75,2.12,5.5c2.04,3.17,2.57,5.08,2.5,8.54 c-0.01,0.59-0.03,1.2-0.28,1.74c-0.6,1.3-2.65,1.58-3.58,0.48c-0.84-0.99-0.61-2.46-0.77-3.75c-0.19-1.54-0.98-2.92-1.56-4.35 C48.05,75.85,47.46,73.47,48.01,70.45z" style="fill:#F4865C;"/></g></g>${animationTag}</g>`)
const sushiSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="160" fill="none" stroke="#000" stroke-linecap="round" xmlns:xlink="http://www.w3.org/1999/xlink">${sushiGroupTags.join('')}</svg>`
const sushiCss = `background: url('data:image/svg+xml;utf8,${sushiSvg}') left top no-repeat; font-size: 108px; margin:10px 0;`

export default sushiCss
