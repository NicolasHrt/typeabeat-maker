"use client";

import {Player} from "@remotion/player";
import type {NextPage} from "next";
import React, {useEffect, useMemo, useState} from "react";
import {Main} from "../remotion/MyComp/Main";
import {
    CompositionProps,
    defaultMyCompProps,
    DURATION_IN_FRAMES,
    VIDEO_FPS,
    VIDEO_HEIGHT,
    VIDEO_WIDTH,
} from "../types/constants";
import {z} from "zod";
import {RenderControls} from "../components/RenderControls";
import {Tips} from "../components/Tips";
import {Spacing} from "../components/Spacing";
import {getAudioDurationInSeconds} from "@remotion/media-utils";
import {staticFile} from "remotion";

const Home: NextPage = () => {
    const [audioUrl, setAudioUrl] = useState<string>(defaultMyCompProps.audioUrl);
    const [imageUrl, setImageUrl] = useState<string>(defaultMyCompProps.imageUrl);
    const [audioDurationInFrames, setAudioDurationInFrames] = useState<number>(DURATION_IN_FRAMES);

    const inputProps: z.infer<typeof CompositionProps> = useMemo(() => ({
        audioUrl: audioUrl,
        imageUrl: imageUrl,
    }), [audioUrl, imageUrl]);

    useEffect(() => {
        const fetchAudioDuration = async () => {
            const durationInSeconds = await getAudioDurationInSeconds(staticFile(audioUrl));
            const durationInFrames = Math.ceil(durationInSeconds * VIDEO_FPS);
            setAudioDurationInFrames(durationInFrames);
        };
        fetchAudioDuration();
    }, [audioUrl]);
    return (
        <div>
            <div className="max-w-screen-md m-auto mb-5">
                <div className="overflow-hidden rounded-geist shadow-[0_0_200px_rgba(0,0,0,0.15)] mb-10 mt-16">
                    <Player
                        component={Main}
                        inputProps={inputProps}
                        durationInFrames={audioDurationInFrames}
                        fps={VIDEO_FPS}
                        compositionHeight={VIDEO_HEIGHT}
                        compositionWidth={VIDEO_WIDTH}
                        style={{
                            // Can't use tailwind class for width since player's default styles take presedence over tailwind's,
                            // but not over inline styles
                            width: "100%",
                        }}
                        controls
                        autoPlay
                        loop
                    />
                </div>
                <RenderControls
                    audioUrl={audioUrl}
                    setAudioUrl={setAudioUrl}
                    imageUrl={imageUrl}
                    setImageUrl={setImageUrl}
                    inputProps={inputProps}
                ></RenderControls>
                <Spacing></Spacing>
                <Spacing></Spacing>
                <Spacing></Spacing>
                <Spacing></Spacing>
                <Tips></Tips>
            </div>
        </div>
    );
};

export default Home;
