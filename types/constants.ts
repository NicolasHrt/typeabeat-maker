import {z} from "zod";
import {staticFile} from "remotion";

export const COMP_NAME = "MyComp";

export const CompositionProps = z.object({
    audioUrl: z.string(),
    imageUrl: z.string()
});

export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
    audioUrl: staticFile("/audio.wav"),
    imageUrl: staticFile("/image.jpg")
};

export const DURATION_IN_FRAMES = 200;
export const VIDEO_WIDTH = 1280;
export const VIDEO_HEIGHT = 720;
export const VIDEO_FPS = 30;
