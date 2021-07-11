declare module '*.scss' {
  export const content: { [className: string]: string };
  export default content;
}

export type GetStaticPropsResponse = {
  props: { [key: string]: unknown }
  revalidate?: number | boolean
}

export type MDXResult = {
  compiledSource: string
  scope: Record<string, unknown>
}

export {}
