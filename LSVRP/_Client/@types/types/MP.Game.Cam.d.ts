/// <reference path="../index.d.ts" />

declare interface MpGameCam {
    isCamSplinePaused(p0: object): boolean;
    renderScriptCams(render: boolean, ease: boolean, easeTime: number, p3: boolean, p4: boolean): void;
    stopGameplayCamShaking(p0: boolean): void;
    setGameplayCamRawYaw(yaw: number): void;
    setCamSplineDuration(cam: number, timeDuration: number): void;
    setGameplayEntityHint(p0: object,
        p1: number,
        p2: number,
        p3: number,
        p4: boolean,
        p5: object,
        p6: object,
        p7: object,
        p8: object): void;
    setFollowVehicleCamZoomLevel(zoomLevel: number): void;
    stopCinematicCamShaking(p0: boolean): void;
    setCamSplinePhase(cam: number, p1: number): void;
    setGameplayPedHint(p0: MpPed,
        x1: number,
        y1: number,
        z1: number,
        p4: boolean,
        p5: object,
        p6: object,
        p7: object): void;
    overrideCamSplineVelocity(cam: number, p1: number, p2: number, p3: number): void;
    setFollowPedCamCutsceneChat(p0: string, p1: number): void;
    setGameplayHintFov(fov: number): void;
    setCinematicButtonActive(p0: boolean): void;
    setFollowPedCamViewMode(viewMode: number): void;
    getGameplayCamRot(p0: number): MpVector3;
    createCamera(camHash: number, p1: boolean): MpCamera;
    createCameraWithParams(camHash: number,
        posX: number,
        posY: number,
        posZ: number,
        rotX: number,
        rotY: number,
        rotZ: number,
        fov: number,
        p8: boolean,
        p9: object): MpCamera;
    setGameplayCamRelativePitch(x: number, p1: number): void;
    createCinematicShot(p0: object, p1: number, p2: object, entity: MpEntity | object): void;
    setGameplayCamRawPitch(pitch: number): void;
    stopCinematicShot(p0: object): void;
    overrideCamSplineMotionBlur(p0: object, p1: object, p2: number, p3: number): void;
    setCamEffect(p0: number): void;
    getGameplayCamRot(p0: number): MpVector3;
    setGameplayObjectHint(p0: object,
        p1: number,
        p2: number,
        p3: number,
        p4: boolean,
        p5: object,
        p6: object,
        p7: object): void;
    addCamSplineNode(camera: number,
        x: number,
        y: number,
        z: number,
        xRot: number,
        yRot: number,
        zRot: number,
        length: number,
        p8: number,
        p9: number): void;
    doScreenFadeOut(duration: number): void;
    destroyAllCams(destroy: boolean): void;
    clampGameplayCamYaw(minimum: number, maximum: number): void;
    setTimeIdleDrop(p0: boolean, p1: boolean): void;
    setGameplayVehicleHint(p0: object,
        p1: number,
        p2: number,
        p3: number,
        p4: boolean,
        p5: object,
        p6: object,
        p7: object): void;
    clampGameplayCamPitch(minimum: number, maximum: number): void;
    setGameplayCamShakeAmplitude(amplitude: number): void;
    setFollowVehicleCamViewMode(viewMode: number): void;
    getCamSplineNodeIndex(cam: number): boolean;
    setGameplayCamRelativeHeading(heading: number): void;
    createCamWithParams(camName: string,
        posX: number,
        posY: number,
        posZ: number,
        rotX: number,
        rotY: number,
        rotZ: number,
        fov: number,
        p8: boolean,
        p9: object): MpCamera;
    createCam(camName: string, p1: boolean): MpCamera;
    setCinematicCamShakeAmplitude(p0: number): void;
    isCinematicShotActive(p0: object): boolean;
    doScreenFadeIn(duration: number): void;
    setGameplayCoordHint(p0: number, p1: number, p2: number, p3: object, p4: object, p5: object, p6: object): void;
    getCamSplineNodePhase(p0: object): number;
    setWidescreenBorders(p0: boolean, p1: number): void;
    shakeCinematicCam(p0: string, p1: number): void;
    setCinematicModeActive(p0: boolean): void;
    animateGameplayCamZoom(p0: number, distance: number): void;
    playSynchronizedCamAnim(p0: object, p1: object, animName: string, animDictionary: string): boolean;
    isSphereVisible(x: number, y: number, z: number, radius: number): boolean;
    getIsMultiplayerBrief(p0: boolean): void;
    stopGameplayHint(p0: boolean): void;
    shakeGameplayGam(shakeName: string, intensity: number): void;
}