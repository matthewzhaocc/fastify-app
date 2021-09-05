import * as fastify from 'fastify';

const router: fastify.FastifyInstance = fastify.fastify({logger: true})

router.get('/hello', async (req, rep) => {
    return { hello: 'world' }
})

const start = async () => {
    try {
        await router.listen(process.env.PORT || 3000)
    } catch (e) {
        router.log.error(e);
        process.exit(1)
    }
}

start()