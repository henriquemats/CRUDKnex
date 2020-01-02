const findAll = async (db) => {
  return await db('pessoas')
    .select('*')
}

const findById = async (db, id) => {
  const result = await db('pessoas')
    .where({ id })

    if (result.length > 0) {
      return result[0]
    } else {
      return {}
    }
}

const deleteOne = async (db, id) => {
  await db('pessoas')
    .where({ id }).del()
}

const create = async (db, data) => {
  return await db('pessoas')
    .insert(data)
}

const update = async (db, id, data) => {
  return await db('pessoas')
    .where({ id })
    .update(data)
}

module.exports = {
  findAll,
  findById,
  deleteOne,
  create,
  update
}