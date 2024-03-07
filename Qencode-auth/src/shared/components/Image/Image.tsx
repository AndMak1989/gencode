import { ImageProps } from '@/shared/components/Image/Image.types.ts';

export function Img(props: ImageProps) {
    return <img {...props} alt={props.alt || 'app-image'} />;
}
