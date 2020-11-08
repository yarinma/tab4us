import json
import shutil

VER = "version"
MANIFEST_LOCATION = "src/manifest.json"

with open(MANIFEST_LOCATION, "r") as handle:
  manifest = json.load(handle)

current_version = float(manifest[VER])
manifest[VER] = "{:.1f}".format(current_version + 0.1)

with open(MANIFEST_LOCATION, "w") as handle:
  json.dump(manifest, handle, indent=2)

shutil.make_archive("tab4us", "zip", "src")