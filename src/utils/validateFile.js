export function validFileSize(file) {
    if (!file) return;
    const oneKB = 1000;
    return (file.size / oneKB) < 500;
}

export function isNotEmpty(string) {
    return string.trim().length !== 0;
}

export function validEmail(string) {
    return string.trim().includes('@');
}

export function validGithubName(string) {
    return string.trim().includes('@') && (string.trim().indexOf('@') === string.trim().lastIndexOf('@'));
}