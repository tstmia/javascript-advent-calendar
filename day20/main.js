/**
 * day20
 * Domain Type
 * returns list of domain types
 */
const checkDomainsType = (domians) => {
    const domainsType = [];
    for (let domain of domians) {
        const urlPieces = domain.split('.');
        switch (urlPieces[urlPieces.length - 1]){
            case 'org':
                domainsType.push('organization');
                break;
            case 'com':
                domainsType.push('commercial');
                break;
            case 'net':
                domainsType.push('network');
                break;
            case 'info':
                domainsType.push('information');
                break;
            default:
                domainsType.push('others');
                break;
        }
    }
    return domainsType;

}

const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];
console.log(checkDomainsType(domains));
