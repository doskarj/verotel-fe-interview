import { describe, it, expect, beforeEach } from 'vitest'

beforeEach(() => {
    const imgEl = document.createElement('img')
    imgEl.id = 'dog-image'
    document.body.append(imgEl)
})

describe("XXX test", () => {
    it('does YYY thing', () => {
        expect(true).toBe(true)
    })
})
