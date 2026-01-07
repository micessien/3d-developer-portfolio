/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_EMAILJS_SERVICE_ID: string;
  readonly VITE_APP_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_APP_EMAILJS_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Declaration for react-tilt (no official types)
declare module "react-tilt" {
  import { ComponentType, HTMLAttributes } from "react";

  export interface TiltOptions {
    max?: number;
    perspective?: number;
    scale?: number;
    speed?: number;
    transition?: boolean;
    axis?: "X" | "Y" | null;
    reset?: boolean;
    easing?: string;
  }

  export interface TiltProps extends HTMLAttributes<HTMLDivElement> {
    options?: TiltOptions;
    className?: string;
  }

  export const Tilt: ComponentType<TiltProps>;
}

// Declaration for react-vertical-timeline-component
declare module "react-vertical-timeline-component" {
  import { ComponentType, ReactNode, CSSProperties } from "react";

  export interface VerticalTimelineProps {
    animate?: boolean;
    className?: string;
    layout?: "1-column" | "1-column-left" | "1-column-right" | "2-columns";
    lineColor?: string;
    children?: ReactNode;
  }

  export interface VerticalTimelineElementProps {
    className?: string;
    contentArrowStyle?: CSSProperties;
    contentStyle?: CSSProperties;
    date?: string;
    dateClassName?: string;
    icon?: ReactNode;
    iconClassName?: string;
    iconOnClick?: () => void;
    iconStyle?: CSSProperties;
    onTimelineElementClick?: () => void;
    position?: string;
    style?: CSSProperties;
    textClassName?: string;
    visible?: boolean;
    children?: ReactNode;
  }

  export const VerticalTimeline: ComponentType<VerticalTimelineProps>;
  export const VerticalTimelineElement: ComponentType<VerticalTimelineElementProps>;
}

// Declaration for maath random module
declare module "maath/random/dist/maath-random.esm" {
  export function inSphere(
    array: Float32Array,
    options?: { radius?: number }
  ): Float32Array;
}

// Asset declarations
declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.gif" {
  const content: string;
  export default content;
}

declare module "*.gltf" {
  const content: string;
  export default content;
}
