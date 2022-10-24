package dk.sdu.mmmi.mdev.services

import dk.sdu.mmmi.mdev.models.MovieModel

interface SuccessCallBack {
    fun call(results: List<MovieModel>)
}