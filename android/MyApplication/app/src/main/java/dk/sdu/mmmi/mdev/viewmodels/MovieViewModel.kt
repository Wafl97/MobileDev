package dk.sdu.mmmi.mdev.viewmodels

import androidx.lifecycle.ViewModel
import dk.sdu.mmmi.mdev.models.MovieModel

object MovieViewModel: ViewModel() {
    private var list = ArrayList<MovieModel>()

    fun getInstance(): MovieViewModel {
        return this
    }

    fun getAll(): ArrayList<MovieModel> {
        return list;
    }

    fun addAll(movies: ArrayList<MovieModel>) {
        list.addAll(movies)
    }

    fun removeAll() {
        list.clear()
    }
}