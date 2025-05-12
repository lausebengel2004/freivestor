export function agentLogger(agentName, message) {
    const timestamp = new Date().toISOString();
    console.log(`[${agentName}][${timestamp}]: ${message}`);
}
