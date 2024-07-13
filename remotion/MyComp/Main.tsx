import {z} from 'zod';
import {Img, Audio, staticFile} from 'remotion';
import {CompositionProps} from '../../types/constants';
import {loadFont} from '@remotion/google-fonts/Inter';
import React from 'react';

loadFont();

export const Main = ({audioUrl, imageUrl}: z.infer<typeof CompositionProps>) => {

    return (
        <div className="aspect-square mx-auto">
            <Audio src={staticFile(audioUrl)}/>
            <Img className="w-full h-full object-cover" src={imageUrl} alt=""/>
        </div>
    );
};