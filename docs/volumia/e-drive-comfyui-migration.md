# VOLUMIA + ComfyUI on Windows: Move AI assets from `C:` to `E:`

This guide standardizes VOLUMIA and ComfyUI on a single install + model layout on drive `E:`.

## Target layout

- ComfyUI root: `E:\AI\ComfyUI_VOL`
- Shared models root: `E:\AI\MODELS`
  - `E:\AI\MODELS\checkpoints`
  - `E:\AI\MODELS\controlnet`
  - `E:\AI\MODELS\sam`
  - `E:\AI\MODELS\vae`
  - `E:\AI\MODELS\loras`
  - `E:\AI\MODELS\clip`

## 1) Update VOLUMIA user config

Edit:

`C:\Users\Usuario\AppData\Roaming\Electron\volumia\config\comfy.user.json`

Set `comfyDir` to `E:\\AI\\ComfyUI_VOL` and keep existing host/port/python override values.

Example:

```json
{
  "comfyDir": "E:\\AI\\ComfyUI_VOL",
  "host": "127.0.0.1",
  "port": 8188,
  "pythonExeOverride": "F:\\MINICONDA\\envs\\volumia\\python.exe",
  "args": ["main.py", "--listen", "127.0.0.1", "--port", "8188"]
}
```

## 2) Configure ComfyUI model lookup on `E:`

Create/update `E:\AI\ComfyUI_VOL\extra_model_paths.yaml` with this exact YAML:

```yaml
checkpoints:
  - E:\AI\MODELS\checkpoints
controlnet:
  - E:\AI\MODELS\controlnet
sam:
  - E:\AI\MODELS\sam
vae:
  - E:\AI\MODELS\vae
loras:
  - E:\AI\MODELS\loras
clip:
  - E:\AI\MODELS\clip
```

## 3) Manual migration (safe: no automatic deletes)

Move files manually (copy first, validate, then remove originals later if desired):

- Checkpoints (`*.safetensors`) → `E:\AI\MODELS\checkpoints`
- ControlNet models → `E:\AI\MODELS\controlnet`
- SAM weights → `E:\AI\MODELS\sam`
- VAE files → `E:\AI\MODELS\vae`
- LoRA files → `E:\AI\MODELS\loras`
- CLIP models → `E:\AI\MODELS\clip`

After this, ComfyUI reads these folders through `extra_model_paths.yaml`.

## 4) Startup logging checklist (what to verify in app logs)

At launch, ensure logs print:

- resolved `comfyDir` (`E:\AI\ComfyUI_VOL`)
- selected `pythonExeOverride`
- whether `extra_model_paths.yaml` exists
- checkpoint sanity list, including (if installed):
  - `hunyuan_3d_v2.1`
  - `Stable Diffusion XL 1.0 Base`

## 5) How to verify

1. **ComfyUI launch location**
   - In VOLUMIA logs, confirm ComfyUI startup command uses `E:\AI\ComfyUI_VOL`.
2. **Model discovery from `E:`**
   - In ComfyUI startup logs/UI model dropdowns, verify models are discovered from `E:\AI\MODELS\...`.
3. **No runtime regressions**
   - Launch generation workflow and confirm no path-related errors.

> Note: This repository does not include the VOLUMIA Electron runtime files where ComfyUI launch code lives. Apply these settings in the VOLUMIA app repository/runtime environment.
