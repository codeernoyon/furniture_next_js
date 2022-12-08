export const getStaticProps = async() => {
    const api = `https://course-api.com/react-store-products`;
    const response = await fetch(api);
    const data = await response.json();

    return {
        props: { data }
    }
}