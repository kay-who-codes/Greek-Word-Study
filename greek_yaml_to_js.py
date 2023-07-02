import json
import yaml


with open("greek.yaml", "r") as stream:
    yaml_content = yaml.safe_load(stream)

json_str = json.dumps(yaml_content)

with open('greek.js', 'w') as f:
    f.write(f'const en_greek_ru = {json.dumps(yaml_content, indent=4)}')
