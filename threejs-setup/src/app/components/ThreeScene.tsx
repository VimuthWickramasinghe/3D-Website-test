"use client";

import { Suspense ,useState, useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreeSceneProps {
  className: string;
}

export default function ThreeScene({ className }: ThreeSceneProps) {
return (
    <div>
    <div
        className={className}
          id="world"
            />
    </div>
  );
}
