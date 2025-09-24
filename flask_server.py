from flask import Flask, request, jsonify
import subprocess
import json

app = Flask(__name__)

@app.route('/api/powershell', methods=['POST'])
def run_powershell():
    try:
        data = request.get_json()
        command = data.get('command')

        if not command:
            return jsonify({'error': 'No command provided'}), 400

        # Execute PowerShell command
        result = subprocess.run(['powershell', '-Command', command],
                              capture_output=True, text=True, shell=True)

        return jsonify({
            'stdout': result.stdout,
            'stderr': result.stderr,
            'returncode': result.returncode
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'Flask server is running'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
