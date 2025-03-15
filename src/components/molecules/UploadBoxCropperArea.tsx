import { useCallback, useRef, useState } from 'react';
import Cropper, { Area, Point } from 'react-easy-crop';
import LabelInputField from '../atoms/LabelInputField.tsx';
import { MdOutlineUploadFile } from 'react-icons/md';
import PopupModal from './PopupModal.tsx';
import Button from '../atoms/Button.tsx';
import getCroppedImg from '../../utils/cropper-utils.ts';
import toast from 'react-hot-toast';
import { t } from 'i18next';
import Slider from '../atoms/Slider.tsx';

export default function UploadBoxCropperArea(props: IProps) {
  const [aspectSet] = useState<number>(props.ratio || 1);
  const [zoom, setZoom] = useState<number>(1);
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [fileCrop, setFileCrop] = useState<any | null>(null);
  const [cropper, setCropper] = useState<Area | null>(null);

  const inputRef: any = useRef(null);

  const showCropper = useCallback(async () => {
    try {
      const resultCropper: any = await getCroppedImg(fileCrop, cropper, 0);
      const file: File = resultCropper.file;
      // uploadProcess(file).then();
      console.log(file);
      setFileCrop(null);
    } catch (e) {
      console.error(e);
      toast.error(t('failed to setup cropper'));
    }
  }, [fileCrop, cropper]);

  const onCropComplete = useCallback((_: Area, croppedAreaPixels: Area) => {
    setCropper(croppedAreaPixels);
  }, []);

  function componentModalCropper() {
    return (
      <div className="flex items-end justify-center h-full lg:py-32 py-4 z-400">
        <Cropper
          image={fileCrop}
          crop={crop}
          zoom={zoom}
          aspect={aspectSet}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />
        <div
          className="w-full px-8 flex justify-center items-center lg:w-[400px] flex-col gap-5"
          style={{ zIndex: 999 }}
        >
          <Slider
            aria-label="Default"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e: number) => {
              setZoom(e);
            }}
          />
          <div className="lg:flex grid grid-cols-2 gap-3    w-full">
            <Button color={'error'} onClick={() => setFileCrop(null)}>
              Cancel
            </Button>
            <Button onClick={showCropper}>Submit</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {props.label && <LabelInputField label={props.label} required={props.required} />}
      <div className={'bg-gray-50 border border-dashed  border-slate-300 rounded-md   h-48'}>
        <div
          className={
            'active:bg-gray-200 h-full w-full flex items-center cursor-pointer justify-center duration-300 hover:bg-gray-100 '
          }
          onClick={() => inputRef.current?.click()}
        >
          <div>
            <MdOutlineUploadFile className={'text-gray-400 text-5xl'} />
          </div>
        </div>

        <input
          onChange={(e: any) => {
            if (e.target.files && e.target.files.length) {
              const reader = new FileReader();
              reader.readAsDataURL(e.target.files[0]);
              reader.addEventListener('load', () => {
                setFileCrop(reader.result);
              });
            }
          }}
          hidden
          accept="image/*"
          type={'file'}
          ref={inputRef}
        />
      </div>
      <PopupModal onClose={() => setFileCrop(undefined)} open={!!fileCrop} component={componentModalCropper()} />
    </div>
  );
}

interface IProps {
  ratio?: number;
  label?: string;
  required?: boolean;
}
