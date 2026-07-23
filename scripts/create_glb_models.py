from pathlib import Path

out_dir = Path('src/assets/models')
out_dir.mkdir(parents=True, exist_ok=True)

model_files = sorted(out_dir.glob('*.glb'))
print('Using existing model files:', ', '.join(p.name for p in model_files) if model_files else 'No .glb files found')
